import scrapy
from point_hub_crawler.items import TgddCrawlerItem

class MacbookTgddSpiderSpider(scrapy.Spider):
    name = "macbook_tgdd_spider"
    allowed_domains = ["www.thegioididong.com"]
    start_urls = ["https://www.thegioididong.com/laptop-apple-macbook/"]

    def parse(self, response):
        # Request tới từng sản phẩm có trong danh sách các Macbook dựa vào href
        for item_url in response.css("li.item > a ::attr(href)").extract():
            yield scrapy.Request(response.urljoin(item_url), callback=self.parse_macbook) # Nếu có sản phẩm thì sẽ gọi tới function parse_macbook
        
       # nếu có sản phẩm kế tiếp thì tiếp tục crawl
        next_page = response.css("li.next > a ::attr(href)").extract_first()
        if next_page:
            yield scrapy.Request(response.urljoin(next_page), callback=self.parse)
    
    def parse_macbook(self, response):
        item = TgddCrawlerItem()
        
        item['product_name'] = response.css(
            'div.product-name > h1 ::text').extract_first() # Tên macbook

        item['price'] = response.css(
            'div.box_main > div.box_right > div.box04.box_normal > div.price-one > div.box-price > p.box-price-old ::text').extract_first()
        
        # out_of_stock = response.css('span.productstatus ::text').extract_first() # Tình trạng còn hàng hay không
        # if out_of_stock: 
        #     item['price'] = response.css(
        #     'strong.pricesell ::text').extract_first()
        # else: 
        #     item['price'] = response.css(
        #     'div.box_main > div.box_right > div.box04.box_normal > div.price-one > div.box-price > p.box-price-old ::text').extract_first()
            
        # discount_online = response.css('div.box-online.notapply').extract_first() # Check nếu có giảm giá khi mua online hay không
        # if discount_online:
        #     item['price_sale'] = response.css(
        #         'div.box_main > div.box_right > div.box04.box_normal > div.price-one > div.box-price > p.box-price-present ::text').extract_first()
        # else:
        #     item['price_sale'] = response.css(
        #         'span.hisprice ::text').extract_first()
                
        yield item