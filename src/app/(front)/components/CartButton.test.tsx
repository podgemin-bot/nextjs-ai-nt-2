import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CartButton from '@/app/(front)/components/CartButton'
import { useCartStore } from '@/lib/cart-store'

vi.mock('@/lib/cart-store', () => ({
  useCartStore: vi.fn(),
}))

describe('CartButton', () => {
  it('calls addItem when clicked', () => {
    const mockAddItem = vi.fn()
    vi.mocked(useCartStore).mockImplementation((selector) =>
  selector({
    items: [],
    addItem: mockAddItem,
    removeItem: vi.fn(),
    clearCart: vi.fn(),
    totalItems: () => 0,
    totalPrice: () => 0,
  })
)

    const product = { id: 1, name: 'Test Product', price: 100 }
    render(<CartButton product={product} />)

    const button = screen.getByRole('button', { name: /หยิบใส่ตะกร้า/i })
    fireEvent.click(button)

    expect(mockAddItem).toHaveBeenCalledWith({
      productId: 1,
      name: 'Test Product',
      price: 100,
      qty: 1,
    })
  })
})
