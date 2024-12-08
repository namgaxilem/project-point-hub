# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import requests


class PointHubCrawlerPipeline:
    def __init__(self):
        pass

    def close(self):
        pass

    def process_item(self, item, spider):
        try:
            res = requests.post(
                'http://localhost:1337/api/create-videos-with-cates-tags-actors', json={
                    "vi": dict(item),
                    "en": dict(item)
                })
            res.raise_for_status()
        except Exception as err:
            print(f"process_item err, {err}")
        return item
