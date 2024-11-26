from pathlib import Path

import scrapy


class QuotesSpider(scrapy.Spider):
    name = "supjav"

    def start_requests(self):
        urls = [
            "https://supjav.video/vi",
            # "https://quotes.toscrape.com/page/2/",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f"quotes-{page}.html"
        Path(filename).write_bytes(response.body)
        self.log(f"Saved file {filename}")