import { Container, ContentWrapper, CardContent } from './styles'
import './styles.css'

const Content = [
    {
        id: 1,
        title: 'The Earth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://plus.unsplash.com/premium_photo-1676296353771-7358fae4f292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    },
    {
        id: 2,
        title: 'Nebula',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2350&q=80',
    },
    {
        id: 3,
        title: 'Space',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2713&q=80',
    },
    {
        id: 4,
        title: 'Milky Way',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80',
    },
    {
        id: 5,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },
    {
        id: 6,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },
    {
        id: 7,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },
    {
        id: 8,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },
    {
        id: 9,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },
    {
        id: 10,
        title: 'Planet Noir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc. Donec euismod, nisl sed aliquam dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc sed nunc.',
        url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80',
    },

]

const ScrollingComp = () => {
  
  return (
    <Container>
        {Content.map((item) => (
            <ContentWrapper key={item.id}>
                <img src={item.url} alt={item.title} width={480} className='my-images'/>
                <CardContent>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </CardContent>
            </ContentWrapper>
        ))}
    </Container>
  )
}

export default ScrollingComp