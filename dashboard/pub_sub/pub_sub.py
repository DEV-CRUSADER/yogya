import queue
import threading

from django.conf import settings

'''
This module, is for InMemory PubSub. 
We can create new topic, one for each type of system event. 
And then various processes can subscribe for events on that topic.
'''


class Topic:
    def __init__(self, name):
        self.name = name
        self.subscribers = []
        self.thread_pool = ThreadPool(settings.THREAD_POOL_SIZE)

    def add_subscriber(self, callback):
        self.subscribers.append(callback)

    def publish(self, message):
        for callback in self.subscribers:
            self.thread_pool.submit(callback, message)


class ThreadPool:
    def __init__(self, num_threads):
        self.queue = queue.Queue()
        self.workers = [threading.Thread(target=self._process_messages) for _ in range(num_threads)]
        for worker in self.workers:
            worker.daemon = True
            worker.start()

    def submit(self, callback, message):
        self.queue.put((callback, message))

    def _process_messages(self):
        while True:
            callback, message = self.queue.get()
            callback(message)
            self.queue.task_done()


class TopicManager:
    TOPIC_CLIENT_EVENTS = Topic("client_events")
    TOPIC_ROLE_EVENTS = Topic("role_events")
    TOPIC_BLOGS_EVENTS = Topic("blogs_events")


topic_manager = TopicManager()
