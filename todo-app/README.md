# 📝 To-Do List Application | Strawberry Glow

A beautiful, modern to-do list application with **local storage functionality**. Built with vanilla JavaScript, HTML, and CSS. Tasks are automatically saved and persist even after closing the browser!

## ✨ Features

✅ **Local Storage** - All tasks are automatically saved to browser storage  
✅ **Add Tasks** - Easy input to add new tasks  
✅ **Check Completion** - Mark tasks as done with a checkbox  
✅ **Edit Tasks** - Update task text anytime  
✅ **Delete Tasks** - Remove individual tasks  
✅ **Filter Tasks** - View All, Active, or Completed tasks  
✅ **Real-time Stats** - Track total, active, and completed tasks  
✅ **Clear Options** - Remove completed or all tasks at once  
✅ **Beautiful Design** - Modern glassmorphism UI with animations  
✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **No Dependencies** - Pure vanilla JavaScript  

## 🎨 Design Highlights

- 🌈 Beautiful gradient backgrounds
- ✨ Glowing effects and animations
- 🎭 Glassmorphism UI design
- 💫 Smooth transitions and hover effects
- 📱 Fully responsive layout
- ♿ Accessibility friendly

## 📂 Files

```
todo-app/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
└── script.js       # JavaScript logic and storage
```

## 🚀 How to Use

### Local Installation:
1. **Download or clone** the files
2. **Open `index.html`** in your web browser
3. **Start adding tasks!** ✨

### Features Explained:

| Feature | How to Use |
|---------|-----------|
| ➕ Add Task | Type in the input box and click "Add" or press Enter |
| ✅ Mark Done | Check the checkbox next to a task |
| ✏️ Edit Task | Click the "Edit" button to modify task text |
| 🗑️ Delete Task | Click the "Delete" button to remove a task |
| 🔍 Filter Tasks | Use All, Active, or Completed filters |
| 📊 View Stats | See total, active, and completed task counts |
| 🧹 Clear Completed | Remove all completed tasks at once |
| 🧹 Clear All | Remove all tasks (cannot be undone!) |

## 💾 Local Storage

All tasks are automatically saved using **browser's localStorage API**:

- ✅ Tasks persist after page refresh
- ✅ Tasks persist after closing the browser
- ✅ Each task has unique ID and timestamp
- ✅ Automatic saving on every change
- ✅ Up to 5MB storage capacity

## 🛠️ Customization

### Change Colors:
Edit the CSS gradient colors in `styles.css`:

```css
.header h1 {
    background: linear-gradient(135deg, #ff1493 0%, #00ffff 50%, #ff1493 100%);
}
```

### Change Font:
Modify the font-family in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Change Storage Key:
Modify the storage key in `script.js`:

```javascript
this.key = 'your_custom_key';
```

## 📱 Browser Compatibility

✅ Chrome/Chromium (Latest)  
✅ Firefox (Latest)  
✅ Safari (Latest)  
✅ Edge (Latest)  
✅ Mobile browsers  

**Requires:** localStorage support (all modern browsers)

## 🎯 Technical Details

### JavaScript Classes:

**TodoStorage** - Manages all localStorage operations:
- `getAll()` - Retrieve all todos
- `add()` - Add new todo
- `update()` - Update existing todo
- `delete()` - Delete a todo
- `clearCompleted()` - Remove completed todos
- `clearAll()` - Clear all todos

**TodoApp** - Main application logic:
- `addTodo()` - Add new task from input
- `toggleTodo()` - Mark task complete/incomplete
- `editTodo()` - Edit task text
- `deleteTodo()` - Delete task
- `getFilteredTodos()` - Filter based on status
- `render()` - Update UI

### Data Structure:

```javascript
{
    id: "1735689234567",
    text: "Task description",
    completed: false,
    createdAt: "2025-01-01T12:00:00.000Z"
}
```

## 🔒 Security

- ✅ HTML escaping to prevent XSS attacks
- ✅ Confirmation dialogs for destructive actions
- ✅ Input validation
- ✅ Safe localStorage usage

## 🎮 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Add task (while typing) |
| Click | Check/uncheck task |
| Edit | Modify task text |
| Delete | Remove task |

## 📝 Future Enhancements

- 🏷️ Task categories/tags
- ⏰ Due dates and reminders
- 🎨 Custom themes
- 📤 Export/Import tasks
- ☁️ Cloud sync
- 🌙 Dark/Light mode toggle
- 🔔 Notifications
- 📈 Analytics

## 💡 Tips

- **Organize**: Use clear, concise task descriptions
- **Filter**: Use filters to focus on what matters now
- **Review**: Check completed tasks regularly for satisfaction
- **Backup**: Export tasks regularly (future feature)

## 📄 License

Free to use and modify for personal and commercial projects!

## 👨‍💻 Credits

Created as part of the **Strawberry Glow** project  
Repository: [mora90-svg/strawberry-glow](https://github.com/mora90-svg/strawberry-glow)

---

**Happy Task Managing!** 📝✨🍓

Need help? Check the code comments for detailed explanations!
