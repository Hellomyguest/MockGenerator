# MockGenerator

This generator creates a JSON string, after parse you will get an array of objects, each object has the following structure:
id: UUID, type: string
customer: full name, type: string
date: date from 01.01.2021 till now in ISO 8601 extended format, type: string
amount: quantity of items in the order, type: number
orderNumber: order number, type: string
order: order items, type: array. Each order item is an object of the following structure:
                                                                            vendorCode: spare part id, type: string
                                                                            title: spare part title, type: string
                                                                            price: spare part price, type: number
sum: total order amount, type: number
loyality: loyality level, type: string