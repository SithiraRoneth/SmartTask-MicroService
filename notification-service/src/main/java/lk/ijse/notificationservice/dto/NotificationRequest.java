/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :15:23
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.notificationservice.dto;

public class NotificationRequest {
    private String userId;
    private String message;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
