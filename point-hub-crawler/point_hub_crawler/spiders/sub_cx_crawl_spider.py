import re
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from point_hub_crawler.items import SubCxCrawlerItem
import requests


def set_playwright_true(request, response):
    request.meta["playwright"] = True
    return request


class SubCxCrawlSpider(CrawlSpider):
    name = "subcx"
    allowed_domains = ["subjav.cx"]
    start_urls = ["https://subjav.cx/"]
    # start_urls = [
    #     "https://subjav.cx/nguoi-thay-giao-bi-cam-do-boi-co-nu-sinh-xinh-dep/26331/"]

    pagination_regex_list = [
        r'https://subjav.cx/?$',
        r'/page/\d+',

        # header link
        'https://subjav.cx/jav-hd/',
        'https://subjav.cx/jav-khong-che/',
        'https://subjav.cx/phim-sex-hiep-dam/',
        'https://subjav.cx/phim-sex-loan-luan/',
        'https://subjav.cx/phim-sex-vung-trom/',
        'https://subjav.cx/jav-vietsub/',
        'https://subjav.cx/phim-sex-trung-quoc/',
        'https://subjav.cx/phim-sex-au-my/',
        'https://subjav.cx/jav-english-subtile/',
        'https://subjav.cx/phim-sex-hay/',

        # actors link
        r'/performer/([^/]+)'
    ]
    rules = (
        Rule(
            LinkExtractor(
                # allow=['https://subjav.cx/nguoi-thay-giao-bi-cam-do-boi-co-nu-sinh-xinh-dep/26331/'],
                deny=pagination_regex_list
            ),
            callback='parse_detail_page',
            follow=True,
            process_request=set_playwright_true
        ),
    )

    def __init__(self, *args, **kwargs):
        super(SubCxCrawlSpider, self).__init__(*args, **kwargs)

    def parse_detail_page(self, response):
        item = SubCxCrawlerItem()

        # title
        item['title'] = response.css(
            '#main > div > div.entry-header.cf > div > h1 ::text').get()
        item['description'] = response.css(
            '#details > div.section-content > p ::text').get()
        item['slug_url'] = response.url
        item['thumbnail_url'] = response.xpath(
            '//*[@id="info"]/div/center/a/img/@src').extract()[0]

        iframe_url = response.css('#video > div > iframe ::attr(src)').get()
        source_video_url = None
        try:
            res = requests.get(iframe_url)
            res.raise_for_status()
            html_content = res.text
            m3u8_link = re.search(r'https?://[^\s]+\.m3u8', html_content)
            if m3u8_link:
                source_video_url = m3u8_link.group(0)
                print("First m3u8 link found:", source_video_url)
        except:
            raise Exception(f"Cannot find source_video_url")
        item['source_video_url'] = source_video_url

        # actors mapping
        performers = response.css(
            '#details > div.section-content > div.performer > a')
        extracted_performers = []
        for performer in performers:
            name = performer.css('::text').get()
            extracted_performers.append(name)
        item['actors'] = extracted_performers

        # tags mapping
        video_code = response.css(
            '#video-code > span ::text').get()
        tags = response.css(
            '#details > div.section-content > span > a')
        extracted_tags = []
        for tag in tags:
            tag_text = tag.css('::text').get()
            extracted_tags.append(tag_text)
        item['tags'] = [video_code] + extracted_tags

        yield item
