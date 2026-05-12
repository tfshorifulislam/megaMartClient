'use client';

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from '@heroui/react';

import React from 'react';

const AddProduct = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Failed to add product');
        }

        // Reset the form or show a success message

        const result = await res.json();
        console.log('Product added:', result);
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Add New Product
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Fill all product information carefully.
                    </p>
                </div>

                {/* Form */}
                <Form
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >

                    {/* Product Name */}
                    <TextField isRequired name="name">
                        <Label>Product Name</Label>

                        <Input placeholder="Sony WH-1000XM5" />

                        <FieldError />
                    </TextField>

                    {/* Category */}
                    <TextField isRequired name="category">
                        <Label>Category</Label>

                        <Input placeholder="Electronics" />

                        <FieldError />
                    </TextField>

                    {/* Brand */}
                    <TextField isRequired name="brand">
                        <Label>Brand</Label>

                        <Input placeholder="Sony" />

                        <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField
                        isRequired
                        name="price"
                        type="number"
                    >
                        <Label>Price</Label>

                        <Input placeholder="299" />

                        <Description>
                            Enter product price in USD
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* Original Price */}
                    <TextField
                        name="originalPrice"
                        type="number"
                    >
                        <Label>Original Price</Label>

                        <Input placeholder="399" />

                        <FieldError />
                    </TextField>

                    {/* Discount */}
                    <TextField
                        name="discount"
                        type="number"
                    >
                        <Label>Discount (%)</Label>

                        <Input placeholder="25" />

                        <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>

                        <Input placeholder="https://example.com/image.jpg" />

                        <FieldError />
                    </TextField>

                    {/* Rating */}
                    <TextField
                        name="rating"
                        type="number"
                    >
                        <Label>Rating</Label>

                        <Input placeholder="4.8" />

                        <Description>
                            Rating between 1 to 5
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* Stock */}
                    <TextField
                        isRequired
                        name="stock"
                        type="number"
                    >
                        <Label>Stock Quantity</Label>

                        <Input placeholder="45" />

                        <FieldError />
                    </TextField>

                    {/* Description */}
                    <TextArea
                        isRequired
                        name="description"
                        placeholder="Write product description..."
                        className="w-full"
                    />

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">

                        <Button
                            type="submit"
                            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl"
                        >
                            Add Product
                        </Button>

                        <Button
                            type="reset"
                            variant="bordered"
                            className="px-8 py-3 rounded-xl"
                        >
                            Reset
                        </Button>

                    </div>

                </Form>
            </div>
        </div>
    );
};

export default AddProduct;