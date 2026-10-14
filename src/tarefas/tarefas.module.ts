import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

@Module({
  imports: []
  controllers: [TarefasController],
  providers: [TarefasService]
})
export class TarefasModule {}
