import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const isLoading = useCartStore((s) => s.isLoading);
  const isSyncing = useCartStore((s) => s.isSyncing);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const getCheckoutUrl = useCartStore((s) => s.getCheckoutUrl);
  const syncCart = useCartStore((s) => s.syncCart);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + parseFloat(item.price.amount) * item.quantity,
    0
  );
  const currency = items[0]?.price.currencyCode || "$";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="relative text-foreground hover:text-accent transition-colors"
          aria-label={`Open cart, ${totalItems} items`}
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-4 w-4 min-w-4 rounded-full p-0 flex items-center justify-center text-[10px] bg-foreground text-background border-0">
              {totalItems}
            </Badge>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-background">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-2xl">Your Bag</SheetTitle>
          <SheetDescription className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {totalItems === 0
              ? "Your bag is empty"
              : `${totalItems} item${totalItems !== 1 ? "s" : ""}`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-light">Your bag is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-4">
                      <div className="w-20 h-24 bg-card overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-base text-foreground truncate">
                          {item.product.node.title}
                        </h4>
                        {item.selectedOptions.length > 0 &&
                          item.variantTitle !== "Default Title" && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.selectedOptions.map((o) => o.value).join(" • ")}
                            </p>
                          )}
                        <p className="text-sm text-foreground font-medium mt-2">
                          {item.price.currencyCode}{" "}
                          {parseFloat(item.price.amount).toFixed(2)}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-border">
                            <button
                              className="h-7 w-7 flex items-center justify-center hover:bg-muted transition-colors"
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm">{item.quantity}</span>
                            <button
                              className="h-7 w-7 flex items-center justify-center hover:bg-muted transition-colors"
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => removeItem(item.variantId)}
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 space-y-4 pt-6 border-t border-border bg-background">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-display text-xl text-foreground">
                    {currency} {totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full h-12 text-xs tracking-[0.2em] uppercase"
                  disabled={items.length === 0 || isLoading || isSyncing}
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Checkout <ExternalLink className="w-3 h-3 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
