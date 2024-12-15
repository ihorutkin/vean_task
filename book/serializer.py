from rest_framework import serializers
from book.models import Author, Book


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name", "date_of_birth"]


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "title", "author"]


class BookListSerializer(BookSerializer):
    author = AuthorSerializer()
