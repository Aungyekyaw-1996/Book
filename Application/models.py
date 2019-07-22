from django.db import models

class Book(models.Model):
	# image=models.ImageField(upload_to='resources/%Y/%m/', null=True, blank=True,default="")
	book_name= models.CharField(max_length=100,default="")
	plot= models.CharField(max_length=1000,default="")
	book_type=models.CharField(max_length=100,default="")
	#owner = models.ForeignKey('auth.User', related_name='brand', on_delete=models.CASCADE)
	#highlighted = models.TextField()
	author_id=models.ForeignKey('Author',related_name='book_id',on_delete=models.CASCADE,default="")
	class Meta:
		ordering = ('book_name',)
	def save(self, *args, **kwargs):
		super(Book, self).save(*args, **kwargs)

class Author(models.Model):
	author_name= models.CharField(max_length=100,default="")
	Birth_date= models.DateField()
	gender=models.CharField(max_length=100,default="")
	#owner = models.ForeignKey('auth.User', related_name='brand', on_delete=models.CASCADE)
	#highlighted = models.TextField()
	# InFold=models.ForeignKey('Book',related_name='book_id',on_delete=models.CASCADE,default="")
	class Meta:
		ordering = ('author_name',)
	def save(self, *args, **kwargs):
		super(Author, self).save(*args, **kwargs)
