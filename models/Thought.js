const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return date.toLocaleString()
      },
    },
    username: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      minLength: 8,
      maxLength: 500,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;