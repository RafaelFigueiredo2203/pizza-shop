import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getGetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'jhon doe',
      email: 'jhondoe@exmaple.com',
      phone: '14996416161',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
