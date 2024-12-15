from rest_framework import viewsets

from book.models import Author, Book
from book.serializer import AuthorSerializer, BookSerializer, BookListSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class BookVewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = self.queryset

        if self.action == ("list", "retrieve"):
            return queryset.select_related()

        return queryset

    def get_serializer_class(self):
        if self.action == "list":
            return BookListSerializer

        return BookSerializer
