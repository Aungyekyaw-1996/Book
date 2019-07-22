from Application.models import Book,Author
from Application.serializers import BookSerializer,AuthorSerializer
from rest_framework import generics
from rest_framework.views import APIView
class BookList(generics.ListCreateAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer
class BookDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer
class AuthorList(generics.ListCreateAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer
class AuthorDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer
