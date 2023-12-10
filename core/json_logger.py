import logging
from datetime import datetime

import json_log_formatter


class CustomisedJSONFormatter(json_log_formatter.JSONFormatter):
    def json_record(self, message: str, extra: dict, record: logging.LogRecord) -> dict:
        extra['timestamp'] = datetime.fromtimestamp(record.created).isoformat()
        extra['level'] = record.levelname
        extra['name'] = record.name
        extra['file_name'] = record.filename
        extra['func_name'] = record.funcName
        extra['line_no'] = record.lineno

        extra['message'] = message

        if record.exc_info:
            extra['exc_info'] = self.formatException(record.exc_info)

        return extra
