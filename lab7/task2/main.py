from models import Animal, Dog, Cat


dog1 = Dog("Buddy", 3, "Brown", "Labrador")
dog2 = Dog("Max", 5, "Black", "Shepherd")

cat1 = Cat("Milo", 2, "White", 9)
cat2 = Cat("Luna", 4, "Gray", 7)

animal1 = Animal("Generic", 6, "Brown")


animals = [dog1, dog2, cat1, cat2, animal1]


for a in animals:

    print(a)

    print(a.info())

    print("Sound:", a.speak())

    print("-" * 20)