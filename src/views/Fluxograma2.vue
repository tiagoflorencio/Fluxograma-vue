
<template>
  <v-container fluid>
    <div>
      <v-row justify="center" align="center" class="pa-2">
        <v-col cols="auto">
          <v-btn density="comfortable" @click="toggleAddCardMode">
            {{ addCardMode ? 'Desativar' : 'Ativar' }} Adicionar Card
          </v-btn>
        </v-col>
      </v-row>
      <div class="screen" ref="screen" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
        <div v-for="(card, index) in cards" :key="index" class="card" :style="{ top: card.y + 'px', left: card.x + 'px' }" @mousedown="startDrag(index)">
         <v-row>
          <v-col class="d-flex justify-space-between">
            <v-btn icon small class="delete-button btn-1" @click="deleteCard(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon small class="edit-button btn-1" @click="editCard(index)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn> 
          </v-col>
         </v-row>
                
          <h3 style="word-wrap: break-word;">{{ card.title }}</h3>
          <p style="word-wrap: break-word;">{{ card.description }}</p>
         
        </div>
      </div>
    </div>

    <v-dialog v-model="editDialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn icon small class="edit-button" v-on="on">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Editar Card</span>
        </v-card-title>
        <v-card-text>
          <!-- Formulário para editar o card -->
          <v-text-field v-model="editedCard.title" label="Título"></v-text-field>
          <v-textarea v-model="editedCard.description" label="Descrição"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="saveEditedCard">Salvar</v-btn>
          <v-btn color="secondary" text @click="cancelEdit">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  </v-container>
</template>
 <script>
export default {
  data() {
    return {
      cards: [
        { title: 'Card 1', description: 'Descrição do Card 1', x: 50, y: 50 },
        { title: 'Card 2', description: 'Descrição do Card 2', x: 200, y: 150 },
        { title: 'Card 3', description: 'Descrição do Card 3', x: 350, y: 250 }
      ],
      addCardMode: false,
      isDragging: false,
      currentCardIndex: null,
      initialMouseOffsetX: null,
      initialMouseOffsetY: null,
      editDialog: false,
      editedCard: {
        title: '',
        description: ''
      },
      currentCardIndex: null
    };
    
  },
  methods: {
    handleClick(event) {
      if (this.addCardMode) {
        const screenRect = this.$refs.screen.getBoundingClientRect();
        const newCard = {
          title: 'Novo Card',
          description: 'Descrição do Novo Card',
          x: event.clientX - screenRect.left - 100,
          y: event.clientY - screenRect.top - 75
        };
        this.cards.push(newCard);
      }
    },
    toggleAddCardMode() {
      this.addCardMode = !this.addCardMode;
    },
    startDrag(index) {
      this.isDragging = true;
      this.currentCardIndex = index;
      const card = this.cards[index];
      const screenRect = this.$refs.screen.getBoundingClientRect();
      this.initialMouseOffsetX = event.clientX - screenRect.left - card.x;
      this.initialMouseOffsetY = event.clientY - screenRect.top - card.y;
    },
    handleMouseDown(event) {
      this.handleClick(event);
      if (!this.addCardMode) {
        this.startDragCard(event);
      }
    },
    handleMouseMove(event) {
      if (this.isDragging) {
        const card = this.cards[this.currentCardIndex];
        const screenRect = this.$refs.screen.getBoundingClientRect();
        card.x = event.clientX - screenRect.left - this.initialMouseOffsetX;
        card.y = event.clientY - screenRect.top - this.initialMouseOffsetY;
      }
    },
    handleMouseUp() {
      this.isDragging = false;
      this.currentCardIndex = null;
      this.initialMouseOffsetX = null;
      this.initialMouseOffsetY = null;
    },
    deleteCard(index) {
      this.cards.splice(index, 1);
    },
    editCard(index) {
      this.currentCardIndex = index; // Atualiza o índice do card atual
      this.editedCard = { ...this.cards[index] };
      this.editDialog = true;
    },
    saveEditedCard() {
      // Lógica para salvar as alterações no card
      // Por exemplo, você pode atualizar o objeto card no array cards
      this.cards[this.currentCardIndex] = { ...this.editedCard };
      this.editDialog = false;
    },
    cancelEdit() {
      this.editDialog = false;
    }
  }
};
</script>
 <style scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  z-index: 9999;
}
 .toolbar-button {
  margin-right: 10px;
}
 .screen {
  position: relative;
  width: 100%;
  height: calc(100vh - 50px); /* Considerando a altura da barra de ferramentas */
  background-color: #f2f2f2;
  overflow: auto;
  scroll-behavior: smooth; 
}
 .card {
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: move;
}
.btn-1{
  height: 28px !important;
  width: 28px !important;
  font-size: 12px;
}
</style>