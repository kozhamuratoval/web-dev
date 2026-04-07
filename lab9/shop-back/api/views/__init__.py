# Active level for current lab setup: Level 5 (Generics).
# To switch implementation for defense, replace this import block with one of:
# - from .fbv import products_list as ProductListAPIView, product_detail as ProductDetailAPIView
# - from .cbv import ProductListAPIView, ProductDetailAPIView
# - from .mixins import ProductListAPIView, ProductDetailAPIView
# and keep Category* views imported from .generics if needed by current urls.
from .generics import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    ProductDetailAPIView,
    ProductListAPIView,
)

