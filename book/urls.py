from django.urls import path, include

from book.views import AuthorViewSet, BookVewSet
from rest_framework import routers


app_name = "books"

router = routers.DefaultRouter()
router.register("authors", AuthorViewSet)
router.register("books", BookVewSet)

urlpatterns = [
    path("", include(router.urls))
]
