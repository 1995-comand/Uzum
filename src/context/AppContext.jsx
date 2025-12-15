import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    const [favoriteItems, setFavoriteItems] = useState(() => {
        const saved = localStorage.getItem("favoriteItems");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, type) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = type === "inc" ? item.quantity + 1 : item.quantity - 1;
                    return { ...item, quantity: Math.max(1, newQuantity) };
                }
                return item;
            })
        );
    };

    const addToFavorites = (product) => {
        setFavoriteItems((prev) => {
            if (prev.find(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromFavorites = (id) => {
        setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
    };

    const isFavorite = (id) => {
        return favoriteItems.some(item => item.id === id);
    }

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    }

    return (
        <AppContext.Provider
            value={{
                cartItems,
                favoriteItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
                isInCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
