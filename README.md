# Lab-9.3: Event Handling
**Author:** Jameka Haggins 
---

## Reflection Questions
1. How did you ensure unique keys for your list items?
2. What considerations did you make when implementing the filtering functionality?
3. How did you handle state updates for task status changes?
4. What challenges did you face when implementing conditional rendering?
---
Since each task in the data set already had a unique id (like "1", "2", etc.), I used that as the key prop when mapping through the tasks. I made sure to avoid using the array index as a key because, in a task manager, you're constantly deleting or re-filtering items. If I used indexes, React might get confused about which task is which when the list order changes, which can lead to weird visual bugs.

The biggest thing I realized was that I shouldn't actually delete the "hidden" tasks from the main state; I just needed to filter the view. I created a derived variable called `filteredTasks` that checks the current filter settings (like "pending" or "high priority") and only shows the items that match. This way, if the user clears the filter, all their tasks are still safely there in the original state.

I used an immutable update pattern. When a user clicks a button to change a task from "pending" to "completed," I used .map() to go through the task array. I’d check if the task ID matched the one being changed; if it did, I’d return a new object with the updated status. If not, I’d just return the task as-is. This ensures I’m never directly mutating the original state, which keeps React’s rendering predictable.

Managing different looks for the tasks based on their priority and status was a bit like a puzzle. I had to decide which approach to use: ternary operators inside the JSX for small things (like changing a text color) or separate logic blocks for bigger changes. I didn't get around to changing the color of the task based on anything other than complete...I just kind of ragequit after that.
