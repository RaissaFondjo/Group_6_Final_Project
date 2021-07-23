import cgi
import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        INDEX_HTML = open('index.html').read()
        self.response.out.write(INDEX_HTML)

class PageTwo(webapp2.RequestHandler):
    def post(self):
        self.response.write('<html><body>You wrote:<pre>')
        self.response.write(cgi.escape(self.request.get('content')))
        self.response.write('</pre></body></html>')

application = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/sign', PageTwo),
], debug=True)