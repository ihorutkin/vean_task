from rest_framework import viewsets

from book.models import Author, Book
from book.serializer import (
    AuthorSerializer,
    BookSerializer,
    BookListSerializer,
    BookRetrieveSerializer,
)
from book.pagination import Pagination


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = Pagination


class BookVewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    pagination_class = Pagination

    def get_queryset(self):
        queryset = self.queryset

        if self.action == ("list", "retrieve"):
            return queryset.select_related()

        return queryset

    def get_serializer_class(self):
        if self.action == "list":
            return BookListSerializer
        elif self.action == "retrieve":
            return BookRetrieveSerializer

        return BookSerializer
