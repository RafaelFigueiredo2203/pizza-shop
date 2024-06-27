import { http, HttpResponse } from 'msw'

import { GetManagedRestaurant } from '../get-managed-restaurant'

export const getGetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurant
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custome desc',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
