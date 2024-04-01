# L = [ 10,40,30,41 ]

# L1 = []

# for i in range(2):
#     L2 = L.copy()
#     m = L[0]
#     for i in range( 1, len(L), 1 ):
#         if m < L[i]:
#             m = L[i]
#     L1.append( m )
#     L.remove( m )


# print( L1 ) 


# A Python program to demonstrate use of 
# generator object with next() 

# A generator function 
def simpleGeneratorFun(): 
	yield 1
	yield 2
	yield 3

# x is a generator object 
x = simpleGeneratorFun() 

# Iterating over the generator object using next 

# In Python 3, __next__() 
print(type(x)) 
# print(next(x)) 
# print(next(x))





