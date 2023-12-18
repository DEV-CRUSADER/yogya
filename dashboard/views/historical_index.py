import logging

from rest_framework import status

from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import permission_required, login_required

from rest_framework.response import Response
from dashboard.services.historical_index.serializers import HistoricalIndexFormSerializer

from dashboard.services.historical_index.services import HistoricalIndexServices


log = logging.getLogger(__name__)


class HistoricalIndexAPIView:
    
    @staticmethod
    @api_view(['POST', 'GET'])
    def get_index_data(request):
        log.info(f"get_index_data called : {request.data}")

        if request.data == {}:

            nse_data = HistoricalIndexServices.get_historical_nse_index(data=None)

            return Response({"sucess": True, "data": nse_data}, status=status.HTTP_200_OK)
        else:
            serializer = HistoricalIndexFormSerializer(data=request.data)

            if serializer.is_valid():
                validated_data = serializer.validated_data

                nse_data = HistoricalIndexServices.get_historical_index_from_and_to_dates(data=validated_data)

                return Response({"sucess": True, "data": nse_data}, status=status.HTTP_200_OK)
            else:
                return Response({"sucess": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        # index_name = request.GET.get('index_name', 'NIFTY 50')
        # data = nse.index_pe_pb_div(symbol=symbol, start_date=start_date, end_date=end_date)
