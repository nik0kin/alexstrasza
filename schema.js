var Schema = {
  achievements: {
    id: {type: 'increments', nullable: false, primary: true},
    achieved: {type: 'boolean', nullable: false},
    date_achieved: {type: 'date', nullable: true},
    title: {type: 'string', nullable: false, maxlength: 150},
    category_id: {type: 'integer', nullable: false, unsigned: true}
  },
  achievement_conditions: {
    id: {type: 'increments', nullable: false, primary: true},
    achievement_id: {type: 'integer', nullable: false, unsigned: true},
    description: {type: 'string', nullable: false, maxlength: 150},
    type: {type: 'integer', nullable: false, unsigned: true},

    // type: simple
    achieved: {type: 'boolean', nullable: false},

    // type: stat
    stat_id: {type: 'integer', nullable: false, unsigned: true},
    stat_operator: {type: 'string', nullable: false, maxlength: 10},
    stat_operand: {type: 'integer', nullable: false},

    // type: meta
    achievement_required_id: {type: 'integer', nullable: false, unsigned: true},

    // type: counter
  //  count_current: {type: 'integer', nullable: false, unsigned: true},
    count_goal: {type: 'integer', nullable: false, unsigned: true},

    // type: overtime
    overtime_goal: {type: 'integer', nullable: false, unsigned: true},
    overtime_period_of_time: {type: 'string', nullable: false, maxlength: 10},
    overtime_periods_of_time: {type: 'integer', nullable: false, unsigned: true},
    overtime_stat: {type: 'integer', nullable: false, unsigned: true},

  },
  /*
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },
  categories: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },
  posts: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true},
    category_id: {type: 'integer', nullable: false, unsigned: true},
    title: {type: 'string', maxlength: 150, nullable: false},
    slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
  },
  tags: {
    id: {type: 'increments', nullable: false, primary: true},
    slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },
  posts_tags: {
    id: {type: 'increments', nullable: false, primary: true},
    post_id: {type: 'integer', nullable: false, unsigned: true},
    tag_id: {type: 'integer', nullable: false, unsigned: true}
  }
  */
};

module.exports = Schema;
