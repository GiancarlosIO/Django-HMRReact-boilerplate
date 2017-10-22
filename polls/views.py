# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views import generic

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'context_webpack'

    def get_queryset(self):
        return [
            {
                'name': 'nexus',
            },
            {
                'name': 'giancarlos',
            },
        ]
