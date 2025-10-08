# likes_comments/views.py

from rest_framework import generics
from .models import Like, Comment
from .serializers import LikeSerializer, CommentSerializer

class LikeListView(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentListView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
