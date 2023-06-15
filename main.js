window.onload = function() {
  var blogList = document.getElementById('blog-list');
  var links = blogList.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', loadBlogPost);
  }

  function loadBlogPost(event) {
    event.preventDefault();
    var blogLink = event.target.getAttribute('href');
    // You can add additional logic to load the blog post content dynamically here
    window.location.href = blogLink;
  }
};
