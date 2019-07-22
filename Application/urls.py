# from rest_framework.routers import DefaultRouter
# from django.conf.urls import include, url
# from Application.models import Book,Author
# from Application.views import BookViewSet,AuthorViewSet

# router = DefaultRouter()
# router.register(r'Book',BookViewSet)
# router.register(r'Author',AuthorViewSet)

# urlpatterns = [
#     url(r'^', include(router.urls))
# ]
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from Application import views

urlpatterns = [
    path('Book/',views.BookList.as_view()),
    path('Author/',views.AuthorList.as_view()),
    path('Book/<int:pk>/', views.BookDetail.as_view()),
    path('Author/<int:pk>/',views.AuthorDetail.as_view()),
    ]

urlpatterns= format_suffix_patterns(urlpatterns)
