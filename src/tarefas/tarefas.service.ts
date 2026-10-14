import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CriarTarefaDto } from './DTO/criar-tarefa.dto';

@Injectable()
export class TarefasService {
    constructor(private readonly prisma: PrismaService) { }
    criar(dto: CriarTarefaDto) {
        return this.prisma.tarefa.create({
            data: {
                titulo: dto.titulo,
            },
        });

    }
    listar() {
        return this.prisma.tarefa.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async buscar(id: number) {
        const tarefa = await this.prisma.tarefa.findUnique({
            where: { id },
        });

        if (!tarefa) {
            throw new NotFoundException(`Tarefa ${id} não encontrada`);
        }

        return tarefa;
    }
}
