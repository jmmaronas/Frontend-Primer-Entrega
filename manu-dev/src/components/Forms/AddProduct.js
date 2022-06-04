export default function AddProduct() {
    return (
        <div className="mt-10 sm:mt-0 lg:w-2/3 lg:m-auto">
            <div className="md:container mt-10">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="http://localhost:8080/api/productos" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-slate-200 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="productName"
                                            autoComplete="given-name"
                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Descripcion
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            autoComplete="family-name"
                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                                            Codigo
                                        </label>
                                        <input
                                            type="text"
                                            name="code"
                                            id="code"
                                            autoComplete="postal-code"
                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="urlImage" className="block text-sm font-medium text-gray-700">
                                            URL Imagen
                                        </label>
                                        <input
                                            type="text"
                                            name="urlImage"
                                            id="urlImage"
                                            autoComplete="family-name"
                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Precio
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            autoComplete="family-name"
                                            className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            name="stock"
                                            id="stock"
                                            autoComplete="family-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

