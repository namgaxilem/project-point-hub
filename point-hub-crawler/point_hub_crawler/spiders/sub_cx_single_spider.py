import scrapy
from point_hub_crawler.items import SubCxCrawlerItem

class SubCxSpiderSpider(scrapy.Spider):
    name = "sub-cx-spider"
    allowed_domains = ["subjav.cx"]
    start_urls = ["https://subjav.cx/"]
    max_page = 5

    # Mutable attributions
    def __init__(self, *args, **kwargs):
        super(SubCxSpiderSpider, self).__init__(*args, **kwargs)
        self.page_count = 1  # Initialize a page counter

    # Parsing main
    def parse(self, response):
        # Request each product in the list base on href
        for item_url in response.css("#content > div.loop-content.switchable-view.grid-small > div > div.item > div.thumb > a::attr(href)").getall():
            yield scrapy.Request(response.urljoin(item_url), callback=self.parse_detail)

        # crawl next page if available
        current_page = str(self.page_count)
        next_page_url = response.xpath(f'//span[text()="{current_page}"]/following-sibling::a[1]/@href').extract_first()
        if next_page_url and self.page_count <= self.max_page:
            self.page_count += 1
            yield scrapy.Request(response.urljoin(next_page_url), callback=self.parse)
    
    # Parsing detail
    def parse_detail(self, response):
        item = SubCxCrawlerItem()

        # title
        item['title'] = response.css(
            '#main > div > div.entry-header.cf > div > h1 ::text').get()

        # description
        item['description'] = response.css(
            '#details > div.section-content > p ::text').get()

        # code
        item['video_code'] = response.css(
            '#video-code > span ::text').get()

        # performers mapping
        performers = response.css('#details > div.section-content > div.performer > a')
        extracted_performers = []
        for performer in performers:
            name = performer.css('::text').get()
            extracted_performers.append(name)
        item['performers'] = extracted_performers

        # category tags mapping
        category_tags = response.css('#details > div.section-content > span > a')
        extracted_category_tags = []
        for tag in category_tags:
            tag_text = tag.css('::text').get()
            extracted_category_tags.append(tag_text)
        item['category_tags'] = extracted_category_tags

        # video frame src
        item['link_src'] = response.css(
            '#video > div > iframe ::attr(src)').get()

        yield item
