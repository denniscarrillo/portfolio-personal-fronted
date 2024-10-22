import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

const CustomCard = ({ id, name, description }) => {
  return (
    <Card className="max-w-[400px]" key={id}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">Proyecto universitario</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/denniscarrillo/proyecto-task-performance">
          Visita el codigo en github
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CustomCard
