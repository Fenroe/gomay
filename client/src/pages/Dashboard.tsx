import { AvatarGroup, Box, Button, Container, Avatar, Heading, MenuButton, MenuList, MenuItem, Menu, List, ListItem } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { userAtom } from "../store"
import { logout } from "../firebase"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useQuery } from "react-query"

export const Dashboard = () => {
    const [user] = useAtom(userAtom)

    const getRandomRecipe = async () => {
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            const data = await res.json()
            console.log(data?.meals[0])
            return data?.meals[0] as any
        } catch (error) {
            console.log(error)
        }
    }

    const getMealCategories = async () => {
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const data = await res.json()
            console.log(data)
            return data.categories as any[]
        } catch (error) {
            console.log(error)
        }
    }

    const randomRecipe = useQuery('random recipe', getRandomRecipe)

    const mealCategories = useQuery('meal categories', getMealCategories)

    return (
        <>
            <Box
            width="100%"
            as="header">
                <Container
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="container.xl">
                    <Box>
                        <Heading
                        textTransform="uppercase"
                        size="md">Gomay</Heading>
                    </Box>
                    <Box as="nav"></Box>
                    <Box>
                        <Menu>
                            <MenuButton
                            backgroundColor="transparent"
                            as={Button} rightIcon={<ChevronDownIcon />}>
                                <AvatarGroup>
                                    <Avatar
                                    size="sm"
                                    name={user?.displayName || undefined}
                                    src={user?.photoURL || undefined}>
                                    </Avatar>
                                </AvatarGroup>
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={Button} onClick={logout}>
                                    Log out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Container>
            </Box>
            <Box as="main">
                <Heading>{randomRecipe.data?.strMeal}</Heading>
                <List>
                    {mealCategories.data?.map((category) =>
                    <ListItem key={category.idCategory}>{category.strCategory}</ListItem>)}
                </List>
            </Box>
        </>
    )
}
