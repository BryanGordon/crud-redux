import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'

export function CreateNewUser () {
  const { addUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    addUser({ name, email, github })
  }

  return (
    <Card style={{ margin: '16px' }}>
      <Title>Create new user</Title>

      <form onSubmit={handleSubmit} className=''>
        <TextInput
          name='name'
          placeholder='Ingrese el nombre'
        />
        <TextInput
          name='email'
          placeholder='Ingrese el email'
        />
        <TextInput
          name='github'
          placeholder='Ingrese el usuario de GitHub'
        />
      </form>

      <div>
        <Button
          type='submit'
          style={{ margin: '16px' }}
        >
          Crear Usuario
        </Button>
      </div>
    </Card>
  )
}
