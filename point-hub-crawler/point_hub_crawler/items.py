# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class PointHubCrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass

class TgddCrawlerItem(scrapy.Item):
    product_name = scrapy.Field()
    price_sale =scrapy.Field()
    price = scrapy.Field()

class SubCxCrawlerItem(scrapy.Item):
    title = scrapy.Field()
    description = scrapy.Field()
    thumbnail_url = scrapy.Field()
    source_video_url = scrapy.Field()
    slug_url = scrapy.Field()

    actors = scrapy.Field()
    categories = scrapy.Field()
    tags = scrapy.Field()