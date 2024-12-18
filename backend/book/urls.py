from django.urls import path, include

from book.views import AuthorViewSet, BookViewSet
from rest_framework import routers


app_name = "books"

router = routers.DefaultRouter()
router.register("authors", AuthorViewSet)
router.register("books", BookViewSet)

urlpatterns = [path("", include(router.urls))]
