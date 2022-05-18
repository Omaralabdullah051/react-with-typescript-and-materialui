import { Private } from "../../components/auth/Private"
import { Profile } from "../../components/auth/Profile"
import { Button } from "../../components/Button"
import { Counter2 } from "../../components/class/Counter2"
import { Container } from "../../components/Container"
import { Box } from "../../components/context/Box"
import { ThemeContextComponent } from "../../components/context/ThemeContext"
import { User3 } from "../../components/context2/User3"
import { UserContextComponent } from "../../components/context2/UserContext"
import { List } from "../../components/generics/List"
import Greet from "../../components/Greet"
import { Heading } from "../../components/Heading"
import { CustomButton } from "../../components/html/Button"
import { CustomComponent } from "../../components/html/CustomComponent"
import { Input2 } from "../../components/html/Input2"
import { Input } from "../../components/Input"
import { Oscar } from "../../components/Oscar"
import { Person } from "../../components/Person"
import { PersonList } from "../../components/PersonList"
import { Text } from "../../components/polymorphic/Text"
import { DomRef } from "../../components/ref/DomRef"
import { MutableRef } from "../../components/ref/MutableRef"
import { RandomNumber } from "../../components/restriction/RandomNumber"
import { Counter } from "../../components/State/Counter"
import { LoggedIn } from "../../components/State/LoggedIn"
import { User } from "../../components/State/User"
import { Status } from "../../components/Status"
import { Toast } from "../../components/templateLiteral/Toast"

export const Home = () => {
    const personName = {
        first: 'Body',
        last: 'Shohel'
      }
    
      const nameList = [
        {
          first: 'Body',
          last: 'Shohel'
        },
        {
          first: 'Shah',
          last: 'Alom'
        },
        {
          first: 'Atim',
          last: 'Akbar'
        },
        {
          first: 'hati',
          last: 'tutul'
        },
      ]
    return (
        <div>
              <h2>TypeScript application</h2>
          <Greet name="typescript" messageCount={10} isLoggedIn={false}/>
          <Person name={personName}/>
          <PersonList names={nameList}/>
          <Status status="success"/>
          <Heading>Placeholder text</Heading>
          <Oscar>
            <Heading>Another Placeholder</Heading>
          </Oscar>
          <Button
             handleClick={() => console.log('Button Clicked')}
             handleClickTwice={(event,id)=> console.log('Button Clicked', event, id)}
          ></Button>
          <Input value='Submit' handleChange={event => console.log(event.target.value)} />
          <Container styles={{border: '1px solid red', padding: '1rem'}}/>
          <LoggedIn />
          <User/>
          <Counter/>
          <ThemeContextComponent>
            <Box/>
          </ThemeContextComponent>
          <UserContextComponent>
            <User3/>
          </UserContextComponent>
          <DomRef/>
          <MutableRef/>
          <Counter2 message="The count value is"/>
          <Private isLoggedIn component={Profile}/>
          <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)}/>
          <List items={[1,2,3]} onClick={(item) => console.log(item)}/>
          <RandomNumber value={10} isPositive/>
          <Toast position="center"/>
          <CustomButton onClick={() => console.log('clicked')} variant='primary'>
            Primary Button
          </CustomButton>
          <Input2 type="text" name='name' id='name' placeholder='Your Name'/>
          <CustomComponent isLoggedIn={false} messageCount={10} name="body sohel"/>
          <Text as="h1" size='lg'>Heading</Text>
          <Text as="p" size='md'>Heading</Text>
          <Text as="label" htmlFor="someId" size='sm'>Heading</Text>
        </div>
    )
}