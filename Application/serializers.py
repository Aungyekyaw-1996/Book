from Application.models import Book,Author
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

class BookSerializer(serializers.ModelSerializer):
	# image=Base64ImageField(represent_in_base64=True)
	class Meta:
		model=Book
		fields=('id','book_name','plot','book_type','author_id')

class AuthorSerializer(serializers.ModelSerializer):
	book_id=serializers.PrimaryKeyRelatedField(many=True,read_only=True)
	class Meta:
		model=Author
		fields=('id','author_name','Birth_date','gender','book_id')
        
