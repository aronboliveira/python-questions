import { DjangoProps } from "@/app/lib/declarations/interfaceComponents";

export default function DjangoAnswer({ f }: DjangoProps): JSX.Element {
  const code = (() => {
    switch (f) {
      case "1":
        return `from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
class UserLocation(models.Model):
		latitude = models.CharField(max_length=100)
		longitude = models.CharField(max_length=100)
		timestamp = models.DateTimeField(auto_now_add=True)
@csrf_exempt
def save_location(request):
		if request.method == 'POST':
				data = json.loads(request.body)
				latitude = data.get('latitude')
				longitude = data.get('longitude')
				location = UserLocation(latitude=latitude, longitude=longitude)
				location.save()
				return JsonResponse({'status': 'success'})
		`;
      case "2":
        return `from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
class UserLocation(models.Model):
		latitude = models.FloatField()
		longitude = models.FloatField()
		timestamp = models.DateTimeField(auto_now_add=True)
@csrf_exempt
def save_location(request):
		if request.method == 'POST':
				data = json.loads(request.body)
				latitude = float(data.get('latitude'))
				longitude = float(data.get('longitude'))
				if -90 <= latitude <= 90 and -180 <= longitude <= 180:
						# Usa a ORM do Django para salvar os dados no banco
						location = UserLocation(latitude=latitude, longitude=longitude)
						location.save()
						return JsonResponse({'status': 'success'})
				else:
						return JsonResponse({'status': 'error', 'message': 'Invalid coordinates'}, status=400)
		`;
      case "3":
        return `from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
class UserLocation(models.Model):
		latitude = models.IntegerField()
		longitude = models.IntegerField()
		timestamp = models.DateTimeField(auto_now_add=True)
@csrf_exempt
def save_location(request):
		if request.method == 'POST':
				data = json.loads(request.body)
				latitude = int(data.get('latitude'))
				longitude = int(data.get('longitude'))
				location = UserLocation(latitude=latitude, longitude=longitude)
				location.save()
				return JsonResponse({'status': 'success'})
  `;
      case "4":
        return `from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
class UserLocation(models.Model):
		latitude = models.FloatField()
		longitude = models.FloatField()
		timestamp = models.DateTimeField(auto_now_add=True)
@csrf_exempt
def save_location(request):
		if request.method == 'POST':
				data = json.loads(request.body)
				latitude = data['latitude']
				longitude = data['longitude']
				location = UserLocation(latitude=latitude, longitude=longitude)
				location.save()
				return JsonResponse({'status': 'success'})
  `;
      case "5":
        return `from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
class UserLocation(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
@csrf_exempt
def save_location(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        latitude = float(data.get('latitude'))
        longitude = float(data.get('longitude'))
        latitude = round(latitude)
        longitude = round(longitude)
        if -90 <= latitude <= 90 and -180 <= longitude <= 180:
            location = UserLocation(latitude=latitude, longitude=longitude)
            location.save()
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid coordinates'}, status=400)
    `;
      default:
        return ``;
    }
  })();
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}
