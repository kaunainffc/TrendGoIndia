from django.urls import path
from .views import LikeListView, CommentListView

urlpatterns = [
    path('likes/', LikeListView.as_view(), name='like-list'),
    path('comments/', CommentListView.as_view(), name='comment-list'),
]
