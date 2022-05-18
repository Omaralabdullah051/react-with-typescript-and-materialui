import React, { useEffect, useRef } from 'react';

const AddItem = () => {
    const nameRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleOnsubmit = (e: any) => {
        e.preventDefault();
        const bookName = e.target.bookName.value;
        const imgUrl = e.target.imgUrl.value;
        const discription = e.target.discription.value;
        const bookPrice = e.target.bookPrice.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;
        const bookInfo = { bookName, imgUrl, discription, bookPrice, quantity, supplierName };

        (async () => {
            try {
                const res = await fetch('https://hidden-eyrie-82910.herokuapp.com/books', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(bookInfo)
                });
                const data = await res.json();
                if (data.success) {
                    e.target.reset();
                }
                else {
                }

            }
            catch (err: any) {
                console.error(err.message);
            }
        })();
    };

    return (
        <div>
            <form onSubmit={handleOnsubmit}>
                <h5>Add Inventory Item</h5>
                <input ref={nameRef} type="text" name="bookName" id="bookName" placeholder='Book Name' autoComplete='off' required />
                <input type="text" name="imgUrl" id="imgUrl" placeholder='Image URL' autoComplete='off' required />
                <input type="text" name="bookPrice" id="bookPrice" placeholder='Book Price' autoComplete='off' required />
                <input type="text" name="quantity" id="quantity" placeholder='Quantity' autoComplete='off' required />
                <input type="text" name="supplierName" id="supplierName" placeholder='Supplier Name' autoComplete='off' required />
                <label htmlFor="discription">Discription</label>
                <textarea name="discription" id="discription" placeholder='Add a short discription' autoComplete='off' required />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;