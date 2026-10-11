use_helper Nanoc::Helpers::Rendering
use_helper Nanoc::Helpers::HTMLEscape

def url(path)
  "#{@config[:base_path]}#{path}"
end

def navigation_class(slug)
  @item.identifier.to_s == "/#{slug}.html" ? "nav-item nav-item-active" : "nav-item"
end
