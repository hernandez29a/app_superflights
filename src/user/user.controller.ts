import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)

@Controller('api/v1/user')
export class UserController {

    constructor( private readonly userService: UserService){}

    @Post()
    @ApiOperation({summary: 'Creacion de Usuario'})
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }

    @Get()
    @ApiOperation({summary: 'Ubicar todos los usuarios'})
    findAll(){
        return this.userService.findAll()
    }

    @Get(':id')
    @ApiOperation({summary: 'obtenr un usuario por su id'})
    findOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Actualizar un Usuario'})
    update(@Param('id') id: string, @Body() userDTO: UserDTO){
        return this.userService.update(id, userDTO);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Elimiar Usuario'})
    delete(@Param('id') id: string){
        return this.userService.delete(id);
    }
}
