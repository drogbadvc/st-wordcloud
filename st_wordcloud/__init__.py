import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component("st_wordcloud", url="http://localhost:3001")
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("st_wordcloud", path=build_dir)


def st_wordcloud(data, width=800, height=600, key=None):
    component_value = _component_func(data=data, width=width, height=height, key=key)
    return component_value
