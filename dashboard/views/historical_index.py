import logging

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from django.contrib.auth.decorators import permission_required, login_required

from dashboard.services.historical_index.serializers import HistoricalIndexFormSerializer, IndexSerializer
from dashboard.services.historical_index.services import HistoricalIndexServices, HistoricalIndexNseServices


log = logging.getLogger(__name__)


class HistoricalIndexAPIView:

    @staticmethod
    @api_view(['POST'])
    def get_index_data(request):
        log.info(f"get_index_data called : {request.data}")

        if request.data == {}:
            nse_data = HistoricalIndexServices.get_historical_nse_index(data=None)
            return Response({"sucess": True, "data": nse_data}, status=status.HTTP_200_OK)
        else:
            serializer = HistoricalIndexFormSerializer(data=request.data)

            if serializer.is_valid():
                validated_data = serializer.validated_data

                index_data = HistoricalIndexServices.get_historical_index_from_and_to_dates(data=validated_data)

                if index_data["status"]:
                    return Response({"status": index_data['status'], "data": index_data['data']},
                                    status=status.HTTP_200_OK)
                else:
                    log.error(f'{index_data["errors"]}')
                    if index_data["errors"] == "No Data Found":
                        return Response({"status": index_data['status'], "data": index_data['data']},
                                        status=status.HTTP_404_NOT_FOUND)
                    else:
                        return Response({"status": index_data['status'], "data": index_data['data'], "errors": index_data['errors']},
                                    status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({"sucess": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    @api_view(['POST'])
    def add_new_index_type(request):

        serializer = IndexSerializer(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data

            index_data = HistoricalIndexServices.add_new_index_data_to_db(data=validated_data)

            if index_data["status"]:
                return Response({"status": index_data['status'], "data": index_data['data']},
                                status=status.HTTP_200_OK)
            else:
                return Response({"status": index_data['status'], "data": index_data['data'], "errors": index_data['errors']},
                                status=status.HTTP_400_BAD_REQUEST)

        else:
            log.error(f"Error in serializer: {serializer.errors}")
            return Response({"status": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
    
    @staticmethod
    @api_view(['GET'])
    def get_indexes_list(request):

        index_data = HistoricalIndexServices.get_index_list(request)

        if index_data["status"]:
            return Response({"status": index_data['status'], "data": index_data['data']},
                            status=status.HTTP_200_OK)
        else:
            return Response({"status": index_data['status'], "data": index_data['data'], "errors": index_data['errors']},
                            status=status.HTTP_400_BAD_REQUEST)
        

    @staticmethod
    @api_view(['GET'])
    def test_API(request):
        HistoricalIndexNseServices.get_data_from_nse_daily(request)
        return Response({"status": True, "data": "API working fine"}, status=status.HTTP_200_OK)