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
    pass

class SubCxCrawlerItem(scrapy.Item):
    title = scrapy.Field()
    description = scrapy.Field()
    video_code = scrapy.Field()
    performers = scrapy.Field()
    category_tags = scrapy.Field()
    link_src = scrapy.Field()
    pass
