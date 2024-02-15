from dashboard.pub_sub.pub_sub import topic_manager


class EventType:
    # General
    CREATE = 'create'
    DELETE = 'delete'
    UPDATE = 'update'
    MOVED = "moved"
    BLOG_UPLOADED = "file_uploaded"
    COMMENT_ADDED = "comment_added"

    # File Request Events
    COMPLETE_FILE_REQUEST = "complete_file_request"


class EntityName:
    CLIENT = "client"
    ROLE = "role"
    BLOGS = "blogs"

class SystemEvent:
    def __init__(self, event_type, entity_id, entity_name, business_member_id, metadata):
        self.event_type = event_type
        self.entity_id = entity_id
        self.entity_name = entity_name
        self.business_member_id = business_member_id
        self.metadata = metadata

    def __str__(self):
        return f"Event Type: {self.event_type}\n" \
               f"Entity ID: {self.entity_id}\n" \
               f"Entity Name: {self.entity_name}\n" \
               f"Business Member ID: {self.business_member_id}\n" \
               f"Metadata: {self.metadata}"

    def create(self):
        ENTITY_NAME_TO_TOPIC[self.entity_name].publish(self)


ENTITY_NAME_TO_TOPIC = {
    "client": topic_manager.TOPIC_CLIENT_EVENTS,
    "role": topic_manager.TOPIC_ROLE_EVENTS,
    "blogs": topic_manager.TOPIC_BLOGS_EVENTS,
}
